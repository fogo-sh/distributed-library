package core

import "github.com/pelletier/go-toml/v2"

type Logs struct {
	Actions []interface{} `toml:"actions"`
}

func (l *Logs) AsBytes() ([]byte, error) {
	bytes, err := toml.Marshal(l)
	if err != nil {
		return nil, err
	}
	return bytes, nil
}
