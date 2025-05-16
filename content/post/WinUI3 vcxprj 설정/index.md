---
title: WinUI3 vcxprj 설정
date: 2025-05-16 00:00:00+0000
categories:
    - 프로그래밍
tags: 
    - 윈도우프로그래밍
---


# WinUI3 vcxprj 설정  


## 설명서
- https://learn.microsoft.com/en-us/windows/apps/winui/winui3/create-your-first-winui3-app


## 수정1
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

## 수정2
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
