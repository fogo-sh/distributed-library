package cmd

import (
	"os"

	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"github.com/spf13/cobra"
)

var logLevel string

var rootCmd = &cobra.Command{
	Use:   "fogolib",
	Short: "Fogo.sh Distributed Library - your friends have books, therefore you do too 📚",
}

func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	cobra.OnInitialize(initLogging)

	rootCmd.PersistentFlags().StringVar(&logLevel, "log-level", "debug", "level to use for logging")
}

func initLogging() {
	log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})

	parsedLogLevel, err := zerolog.ParseLevel(logLevel)
	if err != nil {
		log.Error().Err(err).Msg("Error parsing log level")
		os.Exit(1)
	}
	zerolog.SetGlobalLevel(parsedLogLevel)
}
