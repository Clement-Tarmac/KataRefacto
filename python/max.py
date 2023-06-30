def max(l):
    m = l[0]
    im = 0
    b = len(l)
    for i in range(b):
        if l[i] >= m:
            m = l[i]
            im = i
    return l[im]
