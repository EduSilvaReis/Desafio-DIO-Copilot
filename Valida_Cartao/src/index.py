import re

def get_card_flag(card_number):
    # Visa: Starts with 4
    if re.match(r'^4', card_number):
        return "Visa"

    # Mastercard: Starts with 51-55 or 2221-2720
    if re.match(r'^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)', card_number):
        return "Mastercard"

    # American Express: Starts with 34 or 37
    if re.match(r'^(34|37)', card_number):
        return "American Express"

    # Elo: Starts with 5 or 6, or 4011, 4312, 4389
    if re.match(r'^(5|6|4011|4312|4389)', card_number):
        return "Elo"

    return "Unknown flag"

def main():
    card_number = input("Enter your card number: ")
    card_number = re.sub(r'\D', '', card_number)  # Remove non-digit characters

    if not card_number:
        print("Invalid input. Please enter only numbers.")
    else:
        flag = get_card_flag(card_number)
        print(f"Card flag: {flag}")

if __name__ == "__main__":
    main()