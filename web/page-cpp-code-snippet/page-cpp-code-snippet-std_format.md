﻿# C++ 코드 조각


## std::format

### 설명

* https://cppreference.com/w/cpp/utility/format/formatter.html


### 예제

* 코드

```cpp

#include <algorithm>
#include <format>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <string_view>
 
struct QuotableString : std::string_view
{};
 
template<>
struct std::formatter<QuotableString, char>
{
    bool quoted = false;
 
    template<class ParseContext>
    constexpr ParseContext::iterator parse(ParseContext& ctx)
    {
        auto it = ctx.begin();
        if (it == ctx.end())
            return it;
 
        if (*it == '#')
        {
            quoted = true;
            ++it;
        }
        if (it != ctx.end() && *it != '}')
            throw std::format_error("Invalid format args for QuotableString.");
 
        return it;
    }
 
    template<class FmtContext>
    FmtContext::iterator format(QuotableString s, FmtContext& ctx) const
    {
        std::ostringstream out;
        if (quoted)
            out << std::quoted(s);
        else
            out << s;
 
        return std::ranges::copy(std::move(out).str(), ctx.out()).out;
    }
};
 
int main()
{
    QuotableString a("be"), a2(R"( " be " )");
    QuotableString b("a question");
    std::cout << std::format("To {0} or not to {0}, that is {1}.\n", a, b);
    std::cout << std::format("To {0:} or not to {0:}, that is {1:}.\n", a, b);
    std::cout << std::format("To {0:#} or not to {0:#}, that is {1:#}.\n", a2, b);
}

```


* 출력

```
To be or not to be, that is a question.
To be or not to be, that is a question.
To " \" be \" " or not to " \" be \" ", that is "a question".
```




