  // Assuming BubbliciousUtil class is defined somewhere in your project with the following methods:
export class BubbliciousUtil {
    static isPrime(num: number): boolean {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
      return num > 1;
    }
  
    static hexEndsInB(num: number): boolean {
      const hex = num.toString(16);
      return hex.endsWith('b');
    }
}