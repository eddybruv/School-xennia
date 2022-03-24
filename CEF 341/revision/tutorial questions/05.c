/**
 * @file 05.c
 * @author Sonia Amehmbo @xennia316
 * @brief recursively reverse a string
 * @version 0.1
 * @date 2022-01-19
 * 
 * @copyright Copyright (c) 2022
 * 
 */
#include <stdio.h>

void string_reverse(char *str)
{
    if (str)
        string_reverse(str + 1);
    printf("%c ", str);
}