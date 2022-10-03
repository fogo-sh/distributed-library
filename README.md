# the fogo.sh distributed-library

your friends have books, therefore you do too

## plan

- use go
  - quick to write in
  - folks in fogo.sh have go exp.
  - as much as rust is cool, we want to move fas for this

- for mvp
  - have a file in repo that'll contain a list of 'actions'
    - file format can be toml, easy to read and write
      - use https://github.com/BurntSushi/toml
  - reading this file, and playing the actions, you can basically reach the current 'state' of the library
    - for now, just hold this state in memory, with no ways to mutate other than re-reading the file again
  - expose state of library with basic `GET /` endpoint
    - use https://github.com/gin-gonic/gin
  - dockerize this, include file from repo in build, so that deployed image basically ships with the data inside (https://simonwillison.net/2021/Jul/28/baked-data/)
  - jack will run docker container on his infra
