/**
 * @file 06.c
 * @author Sonia Amehmbo @xennia316
 * @brief recursively prints out prime numbers.
 * @version 0.1
 * @date 2022-01-19
 * 
 * @copyright Copyright (c) 2022
 * 
 */
#include <stdio.h>


int prime(int num, int i)
{
    if (i == 1)
        return 1;
    if (i == 0)
        return 0;
    else 
        return prime(num, i - 1);
}