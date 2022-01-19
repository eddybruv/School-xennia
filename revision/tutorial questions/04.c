/**
 * @file 04.c
 * @author Sonia Amehmbo @xennia316
 * @brief recursively print numbers from 0 to n
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
    print_numbers(n - 1);
    printf("%d ", n);
}
