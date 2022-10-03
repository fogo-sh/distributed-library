package cmd

import (
	"os"

	"github.com/fogo-sh/distributed-library/core"
	"github.com/rs/zerolog/log"
	"github.com/spf13/cobra"
)

var parseCommand = &cobra.Command{
	Use:   "parse <log.toml>",
	Short: "Parse a log toml file",
	Args:  cobra.ExactArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		logs, err := core.ParseFile(args[0])
		if err != nil {
			log.Error().Err(err).Msg("")
			os.Exit(1)
		}
		bytes, err := logs.AsBytes()
		if err != nil {
			log.Error().Err(err).Msg("")
			os.Exit(1)
		}
		println(string(bytes))
	},
}

func init() {
	rootCmd.AddCommand(parseCommand)
}
