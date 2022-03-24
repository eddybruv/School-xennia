/**
 * @file 07.c
 * @author Sonia Amehmbo @xennia316
 * @brief fibonacci numbers reecursively
 * @version 0.1
 * @date 2022-01-19
 * 
 * @copyright Copyright (c) 2022
 * 
 */

#include <stdio.h>

int fib(int a)
{
    if (a == 1)
        return 1;
    if (a == 0)
        return 0;
    else
        return fib(a - 1) + fib(a - 2);
}