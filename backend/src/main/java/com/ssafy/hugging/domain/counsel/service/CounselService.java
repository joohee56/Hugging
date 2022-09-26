package com.ssafy.hugging.domain.counsel.service;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.ssafy.hugging.domain.counsel.repository.CounselRepository;

import lombok.RequiredArgsConstructor;

@Service("counselService")
@RequiredArgsConstructor
@Transactional
public class CounselService {
	private final CounselRepository counselRepository;
}
