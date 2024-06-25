import { BubbliciousUtil } from "@/utils/bubblicious-util";

export class BubbliciousService {

    async findBubbliciousNumbersUpTo(number: number): Promise<number> {
        return new Promise<number>((resolve, reject) => {
          try {
            let count = 0;
            for (let i = 1; i <= number; i++) {
              if (BubbliciousUtil.isPrime(i) && BubbliciousUtil.hexEndsInB(i)) {
                count++;
                const hex = i.toString(16);
                console.log(`${i}; Hex value: ${hex}`);
              }
            }
            resolve(count);
          } catch (error) {
            reject(error);
          }
        });
    }
}
  