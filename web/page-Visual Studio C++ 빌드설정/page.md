# Visual Studio C++ 빌드설정

## Visual Studio C++ 소스 파일 경로에 따라서 obj 파일 생성 하기  

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
