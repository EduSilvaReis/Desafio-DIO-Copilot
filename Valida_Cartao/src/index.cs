using System;
using System.Text.RegularExpressions;

class Program
{
    static string GetCardFlag(string cardNumber)
    {
        // Visa: Starts with 4
        if (Regex.IsMatch(cardNumber, @"^4"))
            return "Visa";

        // Mastercard: Starts with 51-55 or 2221-2720
        if (Regex.IsMatch(cardNumber, @"^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)"))
            return "Mastercard";

        // American Express: Starts with 34 or 37
        if (Regex.IsMatch(cardNumber, @"^(34|37)"))
            return "American Express";

        // Elo: Starts with 5 or 6, or 4011, 4312, 4389
        if (Regex.IsMatch(cardNumber, @"^(5|6|4011|4312|4389)"))
            return "Elo";

        return "Unknown flag";
    }

    static void Main()
    {
        Console.Write("Enter your card number: ");
        string input = Console.ReadLine();
        string cardNumber = Regex.Replace(input, @"\D", ""); // Remove non-digit characters

        if (string.IsNullOrEmpty(cardNumber))
        {
            Console.WriteLine("Invalid input. Please enter only numbers.");
        }
        else
        {
            string flag = GetCardFlag(cardNumber);
            Console.WriteLine($"Card flag: {flag}");
        }
    }
}