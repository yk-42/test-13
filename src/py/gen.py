# generate_anagrams.py

import random

def shuffle_word(word):
    return ''.join(random.sample(word, len(word)))

words = ["listen", "hello", "world", "node", "silent", "deno", "ohlle"]
anagrams = [shuffle_word(w) for w in words]
print(anagrams)
