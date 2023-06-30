def max(l):
    m = l[0]
    im = 0
    for i in range(len(l)):
        if l[i] >= m:
            m = l[i]
            im = i
    return l[im]
