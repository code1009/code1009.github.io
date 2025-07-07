# Visual Studio C++ 빌드 설정

## C++ 소스 파일 경로에 따라서 obj 파일 생성 하기  

```
구성 속성/
	C/C++/
		출력 파일/
			개체 파일 이름: $(IntDir)
			에서
			개체 파일 이름: $(IntDir)%(RelativeDir)
			으로
```

> C++ 소스코드 다른 디렉토리에서 파일명이 동일하여도 충돌이 발생하는 문제를 해결 할 수 있다.





## 윈도우 API utf8 설정  

- winapi xxxxxA()함수들을 utf8로 문자열로 사용  
- manifest 파일을 추가해서 적용 할 수 있습니다.

```
#if 0
	//-----------------------------------------------------------------------
	MessageBoxA(nullptr, (LPCSTR)u8"가나다라", (LPCSTR)u8"제목", MB_OK);
	
	/*
	NOTE: VLD 관련
	- 일반 버전으로 utf-8 적용시 vld에서 오류가 발생함.
	- Azure/vld 버전은 버그수정(fixed) 됨.(https://github.com/Azure/vld).

	https://learn.microsoft.com/en-us/windows/apps/design/globalizing/use-utf8-code-page

	<application xmlns="urn:schemas-microsoft-com:asm.v3">
		<windowsSettings>
		<activeCodePage xmlns="http://schemas.microsoft.com/SMI/2019/WindowsSettings">UTF-8</activeCodePage>
		<dpiAware xmlns="http://schemas.microsoft.com/SMI/2005/WindowsSettings">true</dpiAware>
		<dpiAwareness xmlns="http://schemas.microsoft.com/SMI/2016/WindowsSettings">PerMonitorV2, PerMonitor</dpiAwareness>
		</windowsSettings>
	</application>
	*/
#endif
