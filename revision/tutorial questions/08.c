/**
 * @file 08.c
 * @author @xennia316
 * @brief Recursively finding the gcd of two numbers
 * @version 0.1
 * @date 2022-01-19
 * 
 * @copyright Copyright (c) 2022
 * 
 */

int gcd(int a, int b)
{
    if(b != 0)
        return gcd(a, a%b);
    else
        return 0;
}