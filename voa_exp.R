library(readr)
listentries <- read_delim("~/Downloads/uk-englandwales-ndr-2017-listentries-compiled-epoch-0015-baseline-csv/uk-englandwales-ndr-2017-listentries-compiled-epoch-0015-baseline-csv.csv", 
                                                                                    "*", escape_double = FALSE, trim_ws = TRUE)

library(tidyverse)

wc <- listentries %>%
  filter(grepl('WC', `RG42 2AG`))



