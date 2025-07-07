# 윈도우 API utf8 설정  


## winapi xxxxxA()함수들을 utf8로 문자열로 사용  

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
		<activeCodePage xmlns="http://schemas.microsoft.com/SMI/2019/WindowsSettings">UTF - 8 </activeCodePage>
		<dpiAware xmlns="http://schemas.microsoft.com/SMI/2005/WindowsSettings">true</dpiAware>
		<dpiAwareness xmlns="http://schemas.microsoft.com/SMI/2016/WindowsSettings">PerMonitorV2, PerMonitor</dpiAwareness>
		</windowsSettings>
	</application>
	*/
#endif
```
