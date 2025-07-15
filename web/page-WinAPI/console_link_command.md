# WinAPI

## 디버깅용 콘솔창

### 설명서
- https://learn.microsoft.com/en-us/windows/apps/winui/winui3/create-your-first-winui3-app


### 수정1
```C++

#ifdef _DEBUG
#ifdef UNICODE
#pragma comment(linker, "/entry:wWinMainCRTStartup /subsystem:console")
#else
#pragma comment(linker, "/entry:WinMainCRTStartup /subsystem:console")
#endif
#endif

```
