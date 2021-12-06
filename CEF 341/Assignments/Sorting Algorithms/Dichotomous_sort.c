/**
 * @file Dichotomous_sort.c
 * @author xennia316
 * @brief The dichotomous sorting mathod.
 * @version 0.1
 * @date 2021-12-05
 * 
 * @copyright Copyright (c) 2021
 * 
 */
#include <stdio.h>

void dichotomousSort(int a[], int n)
{
    int i, j, mid = 0, left, right, tem = 0;
    for(i = 1; i < n; i++)
    {
        tem = a[i];
        left = 0;
        right = i - 1;
        while (left <= right)
        {
            mid = (left + right)/2;
            if (a[mid] > tem)
                 right = mid -1;
            else
                left = mid + 1;
        }
        for(j = i - 1; j >= left; j--)
        {
            a[j + 1] = a[j];
        }
        a[left] = tem;

        printf("First %d", i);
        printf("The data to be inserted is:%d ", tem);
        printf("\n");

        for(j = 0; j <= i; j++)
        printf("%d ", a[j]);

    }
}
    int main(void)
    {
        int a[10] = {13, 24, 1, 47, 100};
        dichotomousSort(a, 10);
        for( int i = 0; i < 10; i++)
        printf("The sorted array is:%d ", a[i]);

        return 0;
    }
