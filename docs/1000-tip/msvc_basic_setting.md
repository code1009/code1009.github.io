---
layout: default
title: Visual Studio 기본 설정
parent: 유용한 정보
nav_order: 1002
---

# Visual Studio 기본 설정
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


## Visual Studio 빌드 옵션  


### winapi xxxxxA()함수들 utf8로 설정하기  

```
#if 0
	//-----------------------------------------------------------------------
	MessageBoxA(nullptr, (LPCSTR)u8"가나다라", (LPCSTR)u8"제목", MB_OK);
	
	/*
	일반 버전은 아래 적용하면 vld에서 오류가 발생함.
	하지만, https://github.com/Azure/vld 에 있는 vld는 utf-8 버그 수정 됨.

	https://learn.microsoft.com/en-us/windows/apps/design/globalizing/use-utf8-code-page

	<application xmlns="urn:schemas-microsoft-com:asm.v3">
		<windowsSettings>
		<activeCodePage xmlns="http://schemas.microsoft.com/SMI/2019/WindowsSettings">UTF - 8 </activeCodePage>
		<dpiAware xmlns="http://schemas.microsoft.com/SMI/2005/WindowsSettings">true</dpiAware>
		<dpiAwareness xmlns="http://schemas.microsoft.com/SMI/2016/WindowsSettings">PerMonitorV2, PerMonitor</dpiAwareness>
		</windowsSettings>
	</application>
	*/
#endif
```




### 소스 파일 경로에 따라서 obj 파일 생성 하기  

```
구성 속성/
	C/C++/
		출력 파일/
			개체 파일 이름: $(IntDir)
			에서
			개체 파일 이름: $(IntDir)%(RelativeDir)
			으로
```


----------------------------------------------------------------------------


## 유용한 Visual Studio 오픈 소스 라이브러리  


### Visual Leak Detector  
- [https://kinddragon.github.io/vld/](https://kinddragon.github.io/vld/)  
- [https://github.com/oneiric/vld](https://github.com/oneiric/vld)  
- [https://github.com/dmoulding/vld](https://github.com/dmoulding/vld)  


```
#if 0
#ifdef _DEBUG

#include "../vld/include/vld.h"

// 추가 라이브러리 디렉토리:
// $(ProjectDir)\vld\lib\Win64;%(AdditionalLibraryDirectories)

#endif // _DEBUG
#endif
```


----------------------------------------------------------------------------


## 유용한 Visual Studio Plugin 


### vcpkg  
- [https://vcpkg.io/en/index.html](https://vcpkg.io/en/index.html)  
- [https://vcpkg.io/en/packages](https://vcpkg.io/en/packages)  
- [https://learn.microsoft.com/ko-kr/vcpkg/](https://learn.microsoft.com/ko-kr/vcpkg/)  
- [https://github.com/microsoft/vcpkg/blob/b759049a36728d18260963799a56e6b19cb4a2ef/README_ko_KR.md](https://github.com/microsoft/vcpkg/blob/b759049a36728d18260963799a56e6b19cb4a2ef/README_ko_KR.md)


### Code alignment for Visual Studio  
- [https://marketplace.visualstudio.com/items?itemName=cpmcgrath.Codealignment](https://marketplace.visualstudio.com/items?itemName=cpmcgrath.Codealignment)


### Markdown Editor v2  
- [https://marketplace.visualstudio.com/items?itemName=MadsKristensen.MarkdownEditor2](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.MarkdownEditor2)  


### OpenCppCoverage  
- [https://marketplace.visualstudio.com/items?itemName=OpenCppCoverage.OpenCppCoveragePlugin&ssr=false#review-details](https://marketplace.visualstudio.com/items?itemName=OpenCppCoverage.OpenCppCoveragePlugin&ssr=false#review-details)  
- [https://github.com/OpenCppCoverage/OpenCppCoveragePlugin/issues/48](https://github.com/OpenCppCoverage/OpenCppCoveragePlugin/issues/48)  
- [https://github.com/OpenCppCoverage/OpenCppCoveragePlugin/files/7818401/VSPackage.zip](https://github.com/OpenCppCoverage/OpenCppCoveragePlugin/files/7818401/VSPackage.zip)  


### PVS - Studio  
- [https://marketplace.visualstudio.com/items?itemName=EvgeniyRyzhkov.PVS-Studio](https://marketplace.visualstudio.com/items?itemName=EvgeniyRyzhkov.PVS-Studio)  


---
수정: 2024년 07월 17일  

