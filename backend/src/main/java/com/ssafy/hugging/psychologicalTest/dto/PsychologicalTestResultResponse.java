package com.ssafy.hugging.psychologicalTest.dto;

import com.ssafy.hugging.model.Category;
import lombok.Getter;

@Getter
public class PsychologicalTestResultResponse {
    private Integer resultScore;
    private Category category;
}
