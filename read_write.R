library(readr)
library(xlsx)
# install.packages("xlsx")
library(tidyverse)

questions <- as.data.frame(names(form_1_sia_audit))
write.xlsx(form_1_sia_audit, file = "/Users/nicolaspalominos/Desktop/EPI_190917.xlsx", colNames = TRUE, borders = "rows")

df_ss <- as.data.frame(form_1_sia_audit)

ss <- df_ss %>%
  group_by(`1_Surveyor_Nickname`) %>%
  summarise(n = n(), type = paste(sort(unique(`2_Map_sheet_number`)),collapse=", "))

str(df_ss)
summary(df_ss)
head(sort(df_ss$`1_Surveyor_Nickname`))
