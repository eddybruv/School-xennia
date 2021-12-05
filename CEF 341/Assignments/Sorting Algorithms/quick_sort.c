/**
 * @file quick_sort.c
 * @author xennia316 
 * @brief implementing the sort by segmentation or quick sort.
 * @version 0.1
 * @date 2021-12-04
 * 
 * @copyright Copyright (c) 2021
 * 
 */

#include <stdio.h>

int deb = 0;
int fin = 9;
int tab[] = {1,2,7,10,15,19,20,27,31,20};

int segmentation(int *arr, int i, int j)
{
    int p, q;
    int val, per;

    p = i; 
    q = j;
    val = arr[j];

        while(p <= q)
        {
            while((arr[p] <= val)&&(p <= j))
                p++;
            
            while((arr[q] > val) && (i <= q))
                q--;

            if(p < q)
            {
                per = arr[p];
                arr[p] = arr[q];
                arr[q] = per;
            }
        }
        return q;
}

void displayArray(int*T, int i, int j)
{
    int k;
        printf("\n Array:");
    for(k = i; k <= j; k++)
        printf("%d " , T[k]);

    printf("\n\n");


    return;
}

void Sort_Seg(int *T, int i, int j)
{
    int m;
        if(i < j)
        {
            m = segmentation(T, i, j);
            //displayArray(T, deb, fin);

        if(m == j)
            Sort_Seg(T, i, m-1);

        else
            Sort_Seg(T, i, m);

        Sort_Seg(T, m+1, j);

        }
        return;
}

int main(void)
{
    displayArray(tab, deb, fin);

    Sort_Seg(tab, deb, fin);
    
    displayArray(tab, deb, fin);
}