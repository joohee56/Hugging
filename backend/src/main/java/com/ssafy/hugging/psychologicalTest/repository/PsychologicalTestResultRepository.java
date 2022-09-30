package com.ssafy.hugging.psychologicalTest.repository;

import com.ssafy.hugging.psychologicalTest.domain.PsychologicalTestResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PsychologicalTestResultRepository extends JpaRepository<PsychologicalTestResult, Integer> {
}
