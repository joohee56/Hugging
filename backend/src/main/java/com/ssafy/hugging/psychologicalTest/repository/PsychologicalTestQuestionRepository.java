package com.ssafy.hugging.psychologicalTest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PsychologicalTestQuestionRepository extends JpaRepository<PsychologicalTestQuestionRepository, Integer> {

}
