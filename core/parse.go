package core

import (
	"os"

	"github.com/pelletier/go-toml/v2"
)

func ParseFile(path string) (*Logs, error) {
	file, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}
	return Parse(file)
}

func Parse(data []byte) (*Logs, error) {
	var logs Logs
	err := toml.Unmarshal([]byte(data), &logs)
	if err != nil {
		return nil, err
	}
	return &logs, nil
}
