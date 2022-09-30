package com.ssafy.hugging.psychologicalTest.controller;

import com.ssafy.hugging.global.common.Response;
import com.ssafy.hugging.psychologicalTest.dto.PsychologicalTestResultRequest;
import com.ssafy.hugging.psychologicalTest.service.PsychologicalTestService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.ssafy.hugging.psychologicalTest.PsychologicalTestConstant.ADD_PSYCHOLOGICALTEST_RESULT_SUCCESS_MESSAGE;

@RestController
@RequestMapping("/psychologicalTest")
@RequiredArgsConstructor
public class PsychologicalTestController {

    private final Response response;
    private final PsychologicalTestService psychologicalTestService;

    @PostMapping("/result")
    @ApiOperation(value = "심리테스트 결과 저장", notes = "심리테스트 결과 저장")
    public ResponseEntity<?> addPsychologicalTestResult(@RequestBody PsychologicalTestResultRequest psychologicalTestResultRequest){
        psychologicalTestService.addPsychologicalTestResult(psychologicalTestResultRequest);
        return response.success(ADD_PSYCHOLOGICALTEST_RESULT_SUCCESS_MESSAGE);
    }
}
