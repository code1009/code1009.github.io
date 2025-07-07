# 유용한 Visual Studio 오픈 소스 라이브러리  


## Visual Leak Detector  
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


> 현재까지 사용해본 메모리릭 감지용 라이브러리 중에서 가장 쓸만했지만,
  버전업이 더이상 되지 안되면서, 
  현재는 vc 자체의 메모리릭 디버깅 지원 런타임을 사용합니다.
  그래도 아직 쓸만 합니다.
  