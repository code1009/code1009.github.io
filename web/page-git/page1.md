# git 명령어



## 덮어쓰기
```
git reset --hard origin
git reset --soft origin
git reset --soft HEAD~{커밋수}
git reset --hard origin/{브랜치-이름}
```



## 커밋합치기
```
git rebase -i HEAD~{커밋수}
```



## 로컬에서 브랜치전환
```
git checkout {브랜치-이름}
```



## 새 저장소의 초기 커밋을 기존 저장소와 병합
```
git pull origin {브랜치-이름} --allow-unrelated-histories
```



## 저장소의 초기화
```
{.git 폴더 삭제}
git init
git add --all
git commit -m "init"
git remote add origin https://github.com/code1009/{저장소 이름}.git
git push -f origin master
```

