/**
 * @file 01.c
 * @author Sonia Amehmbo @xennia316
 * @brief recursive multiplication of two numbers.
 * @version 0.1
 * @date 2022-01-19
 * 
 * @copyright Copyright (c) 2022
 * 
 */

#include <stdio.h>
#include <stdlib.h>

int mult(int a, int b)
{
    int p;
    if (b == 1)
        return a;
    p = a + mult(a, b - 1);
    return p;
}

int main(void)
{
    int a, b;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("%d\n", mult(a, b));

    return 0;
}