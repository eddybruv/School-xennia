/**
 * @file 02.c
 * @author Sonia Amehmbo @xennia316
 * @brief recursive function that takes base and exponential and displays base^exp
 * @version 0.1
 * @date 2022-01-19
 * 
 * @copyright Copyright (c) 2022
 * 
 */

#include <stdio.h>
#include <stdlib.h>

int expo(int base, int exp)
{
    if (exp == 0)
        return 1;
    else
        return base * expo(base, exp - 1);
}

int main(void)
{
    int base, exp;

    printf("Enter exponential and base below: ");
    scanf("%d %d", &base, &exp);

    printf("%d^%d = %d \n", base, exp, expo(base, exp));
    return 0;
}