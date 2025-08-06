import random

hidden_number = random.randint(1, 100)
if hidden_number > 10:
    max_attempts = 5
else:
    max_attempts = 3
while True:
    try:
        attempts = int(input(f"How many attempts do you want? \nPlease choose a number between 1 and {max_attempts}. "))
        if attempts < 1 or attempts > max_attempts:    
            print(f"Please choose a number between 1 and {max_attempts}.")
        else:
            # print(f"You have chosen {attempts} attempts.\nThe hidden number was {hidden_number}.")
            False
            break
    except ValueError:
        print(f"Invalid input. Please enter a number between 1 and {max_attempts}. ")
        
if hidden_number > 10:
    max_hidden_number = 100
else:
    max_hidden_number = 10
while True:
    try:
        while attempts > 0:
            guess = int(input(f"Guess the hidden number (between 1 and {max_hidden_number}): "))
            if guess < 1 or guess > max_hidden_number:
                print(f"Please choose a number between 1 and {max_hidden_number}.")
            else:
                if guess == hidden_number:
                    print(f"Congratulations! You've guessed the hidden number {hidden_number}! in {max_attempts - attempts + 1} attempts.")
                    break
                else:
                    attempts -= 1
                    if guess < hidden_number:
                        print("The hidden number is higher.")
                    else:
                        print("The hidden number is lower.")
                    print(f"You have {attempts} attempts left.")
                if attempts == 0:
                    print(f"Sorry, you've run out of attempts. The hidden number was {hidden_number}.")
                    break
        False
        break
    except ValueError:
        print(f"Please enter a valid number. (between 1 and {max_hidden_number}).")