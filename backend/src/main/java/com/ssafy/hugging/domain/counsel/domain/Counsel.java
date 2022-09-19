package com.ssafy.hugging.domain.counsel.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.ssafy.hugging.domain.member.domain.Member;
import com.ssafy.hugging.domain.model.BaseEntity;
import com.ssafy.hugging.domain.model.Status;
import com.ssafy.hugging.domain.model.Subject;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Builder @Getter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class Counsel extends BaseEntity {
	private LocalDateTime reservation_date;
	@Enumerated(EnumType.STRING)
	private Subject subject;
	@Enumerated(EnumType.STRING)
	private Status status;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "counselorId")
	private Counselor counselor;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "memberId")
	private Member member;

	public void setCounselor(Counselor counselor){
		this.counselor = counselor;
		counselor.getCounselList().add(this);
	}

	public void setMember(Member member){
		this.member = member;
		counselor.getCounselList().add(this);
	}
}
