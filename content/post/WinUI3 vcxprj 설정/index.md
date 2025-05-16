---
title: vld
date: 2025-05-16 00:00:00+0000
categories:
    - 프로그래밍
tags: 
    - 윈도우프로그래밍
---


# WinUI3 vcxprj 설정  


## 설명서
- https://learn.microsoft.com/en-us/windows/apps/winui/winui3/create-your-first-winui3-app


## 수동 설정1
```
<Project ...>
  ...
  <PropertyGroup>
    ...
    <WindowsPackageType>None</WindowsPackageType>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ...
  </PropertyGroup> 
  ...
</Project>
```

## 수동 설정2
```
<Project ...>
  ...
  <PropertyGroup Label="Globals">
    ...
    <AppxPackage>false</AppxPackage>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ...
  </PropertyGroup> 
  ...
</Project>
```
