data = open('links.txt', 'r', encoding='utf-8')
data = data.read()
data = data.splitlines()
print(len(data))
w_file = open('links_duli_thue.txt', 'a', encoding='utf-8')
result = [i for n, i in enumerate(data) if i not in data[:n]]
for i in result:
    w_file.write(i+'\n')
w_file.close()
