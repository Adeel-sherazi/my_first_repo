#!/usr/bin/env python3
"""
My First Python Program
A simple Hello World program to get started with programming.
"""

def greet(name="World"):
    """
    Greet someone by name.
    
    Args:
        name (str): The name to greet. Defaults to "World".
    
    Returns:
        str: A greeting message.
    """
    return f"Hello, {name}!"


def main():
    """
    Main function to run the program.
    """
    print(greet())
    print(greet("GitHub"))
    print(greet("Programmer"))
    
    # Try it with your own name!
    print("\nTry customizing the greeting:")
    print(greet("Your Name Here"))


if __name__ == "__main__":
    main()
