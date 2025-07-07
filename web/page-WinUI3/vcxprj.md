# WinUI3

## vcxprj 설정  

### 설명서
- https://learn.microsoft.com/en-us/windows/apps/winui/winui3/create-your-first-winui3-app


### 수정1
```
<Project ...>
  ...
  <PropertyGroup Label="Globals">
    ...
    <WindowsPackageType>None</WindowsPackageType>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 추가
    ...
  </PropertyGroup> 
  ...
</Project>
```

### 수정2
```
<Project ...>
  ...
  <PropertyGroup Label="Globals">
    ...
    <AppxPackage>false</AppxPackage>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 수정
    ...
  </PropertyGroup> 
  ...
</Project>
```

### 배포관련
https://johnnys.news/2024/03/Revisited-WinUI-publishing-a-single-exe

```
<PropertyGroup>
    <PublishSingleFile>true</PublishSingleFile>
    <SelfContained>true</SelfContained>
    <WindowsAppSDKSelfContained>true</WindowsAppSDKSelfContained>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 삭제
</PropertyGroup>
```

- WindowsAppSDKSelfContained는 삭제 하고 빌드
    - sdk가 설치되어 있는 상태에서
        - resources.pri
        - Microsoft.WindowsAppRuntime.Bootstrap.dll
        - app.exe
    - 파일 3개만 있으면 동작 가능

