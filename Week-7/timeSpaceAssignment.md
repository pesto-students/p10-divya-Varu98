Time Complexity
Benchmarks for assignment
All the solution should have the optimized solutions
If possible an explanation for the provided optimized solutions should also be given
Questions
Guess the time complexity for the following

    int a = 0, b = 0;    
    for (i = 0; i < N; i++) {
        a = a + rand();  
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }
 Assume that rand() is O(1) time, O(1) space function.

Ans : 
The time complexity of the given code can be analyzed as follows:

The first for loop iterates N times, where N is a given constant. Within each iteration, the code performs an addition operation a = a + rand(). Since rand() is assumed to be an O(1) time function, the addition operation can be considered O(1) as well. Therefore, the total time complexity of the first loop is O(N).

Similarly, the second for loop iterates M times, where M is another given constant. Within each iteration, the code performs an addition operation b = b + rand(), which is also O(1) time. Therefore, the total time complexity of the second loop is O(M).

Since the two loops are independent of each other, we can simply add their time complexities together. Hence, the overall time complexity of the given code is O(N + M).

It's important to note that if the values of N and M are known and fixed constants, the time complexity can be simplified to O(1) since the loops have a fixed number of iterations.

 ---
What is the time, space complexity of following

int a = 0, b = 0;    
for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
        a = a + j;
    }
}
for (k = 0; k < N; k++) {
    b = b + k;
}

Ans:

The first two nested for loops iterate from 0 to N-1 for both variables i and j. Within each iteration of the inner loop, the code performs the addition operation a = a + j. Since this operation is executed N times for each iteration of the outer loop, the time complexity of the nested loops is O(N^2).

The third for loop iterates from 0 to N-1, performing the addition operation b = b + k within each iteration. Since this loop iterates N times, the time complexity of the third loop is O(N).

Considering that the loops are independent, we can sum their time complexities together. Therefore, the overall time complexity of the given code is O(N^2 + N).

In Big O notation, we usually drop the lower-order terms and constants. Hence, the time complexity can be simplified to O(N^2).

---

What is the time complexity of the following code :

 int a = 0;
 for (i = 0; i < N; i++) {
     for (j = N; j > i; j--) {
         a = a + i + j;
     }
 }

Ans : O(N^2)

---

What is the time complexity of the following code :

    int a = 0, i = N;
    while (i > 0) {
        a += i;
        i /= 2;
    }
What is time complexity of following code :

    int count = 0;
    for (int i = N; i > 0; i /= 2) {
        for (int j = 0; j < i; j++) {
            count += 1;
        }
    }

    ---
What is the time complexity of the following code :

int i, j, k = 0;
for (i  = n/2; i <= n; i++) {
    for (j = 2; j <= n; j = j * 2) {
        k = k + n/2;
    }
}
In the following C++ function, let n >= m.

         int gcd(int n, int m) {
         if (n%m ==0) return m;
         if (n < m) swap(n, m);
         while (m > 0) {
             n = n%m;
             swap(n, m);
         }
         return n;
 }
 What is the time complexity of the above function assuming n > m?

What is the worst case time complexity of the following code :

/* 
 * V is sorted 
 * V.size() = N
 * The function is initially called as searchNumOccurrence(V, k, 0, N-1)
 */
int searchNumOccurrence(vector<int> &V, int k, int start, int end) {
    if (start > end) return 0;
    int mid = (start + end) / 2;
    if (V[mid] < k) return searchNumOccurrence(V, k, mid + 1, end);
    if (V[mid] > k) return searchNumOccurrence(V, k, start, mid - 1);
    return searchNumOccurrence(V, k, start, mid - 1) + 1 + searchNumOccurrence(V, k, mid + 1, end);
}
What is the worst case time complexity of the following code:

int findMinPath(vector<vector<int> > &V, int r, int c) {
  int R = V.size();
  int C = V[0].size();
  if (r >= R || c >= C) return 100000000; // Infinity
  if (r == R - 1 && c == C - 1) return 0;
  return V[r][c] + min(findMinPath(V, r + 1, c), findMinPath(V, r, c + 1));
}
Assume R = V.size() and C = V[0].size()
What is the worst case time complexity of the following code:

  int memo[101][101];
  int findMinPath(vector<vector<int> >& V, int r, int c) {
   int R = V.size();
   int C = V[0].size();
   if (r >= R || c >= C) return 100000000; // Infinity
   if (r == R - 1 && c == C - 1) return 0;
   if (memo[r][c] != -1) return memo[r][c];
   memo[r][c] =  V[r][c] + min(findMinPath(V, r + 1, c), findMinPath(V, r, c + 1));
   return memo[r][c];
 }
 
 Callsite : 
 memset(memo, -1, sizeof(memo));
 findMinPath(V, 0, 0);
 Assume R = V.size() and C = V[0].size() and V has positive elements
What is the time complexity of the following code :

    int a = 0, i = N;
    while (i > 0) {
        a += i;
        i /= 2;
    }
What is time complexity of following code :

    int count = 0;
    for (int i = N; i > 0; i /= 2) {
        for (int j = 0; j < i; j++) {
            count += 1;
        }
    }
What is the time complexity of the following code :

int i, j, k = 0;
for (i  = n/2; i <= n; i++) {
    for (j = 2; j <= n; j = j * 2) {
        k = k + n/2;
    }
}
In the following C++ function, let n >= m.

int gcd(int n, int m) {
        if (n%m ==0) return m;
        if (n < m) swap(n, m);
        while (m > 0) {
            n = n%m;
            swap(n, m);
        }
        return n;
}

What is the time complexity of the above function assuming n > m?

