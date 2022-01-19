/**
 * @file 03.c
 * @author Sonia Amehmbo @xennia316
 * @brief prints from 0 to n recursively
 * @version 0.1
 * @date 2022-01-19
 * 
 * @copyright Copyright (c) 2022
 * 
 */
#include <stdio.h>

int print_numbers(int n)
{
    if (n >= 0)
    {
        return;
    }
    printf("%d ", n);
    print_numbers(n - 1);
}

