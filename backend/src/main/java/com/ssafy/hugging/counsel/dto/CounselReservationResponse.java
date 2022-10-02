package com.ssafy.hugging.counsel.dto;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.ssafy.hugging.counsel.domain.Counsel;
import com.ssafy.hugging.model.Status;
import com.ssafy.hugging.model.Subject;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CounselReservationResponse {
	private Integer counselId;
	private String reservationDate;
	private Subject subject;
	private Status status;

	public static CounselReservationResponse of(Counsel counsel) {
		return new CounselReservationResponseBuilder()
			.counselId(counsel.getCounselor().getId())
			.reservationDate(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm").format(counsel.getReservationDate()))
			.subject(counsel.getSubject())
			.status(counsel.getStatus())
			.build();
	}
}
