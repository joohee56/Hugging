package com.ssafy.hugging.mission.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.hugging.mission.domain.ProceedingMission;

public interface ProceedingMissionRepository extends JpaRepository<ProceedingMission, Integer> {
	Optional<ProceedingMission> findProceedingMissionByMission_IdAndMember_Id(Integer missionId, Integer memberId);
	List<ProceedingMission> findProceedingMissionByCreateDate(LocalDate createDate);
}
