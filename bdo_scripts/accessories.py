import sys
import pprint

##
# This script was made to fix enhancement rates and give averages 
# that portray the cost of the given base types:
#   manos, geranoa, loggia accessories
# 
# The following arguments from the system are as follows
## *NOTE* The following values should be inputed divisible by one million (ie: 240 = 240,000,000)
#   argv[1] = base manos cost
#   argv[2] = black gem cost
#   argv[3] = conc black gem cost

def make_means(d, c, enh_rates, bg=0, cbg=0):
    ol = []
    t = 0
    for i in range(5):
        if i == 0:
            t += d[0]
        if c != 2:
            t = (t + d[1][i]*cbg)/enh_rates[c][i]
            ol.append(round(t))
        else:
            t = (t + d[1][i]*bg)/enh_rates[c][i]
            ol.append(round(t))
    return ol

bd = {
    'manos': [
        float(sys.argv[1])*1000000,
        [10, 11, 13, 16, 20]
    ],
    'geranoa': [
        10000000,
        [1, 2, 3, 4, 5]
    ],
    'loggia': [
        1000000,
        [1, 2, 3, 4, 5]
    ]
}

enh_t = [
    'pri',
    'duo',
    'tri',
    'tet',
    'pen'
]

enh_rates = [
    [.75, .45, .3, .15, .05],
    [.7, .45, .3, .18, .08],
    [.7, .4, .3, .2, .1]
]

cbg, bg = float(sys.argv[2])*1000000, float(sys.argv[3])*1000000

def add_commas(s):
    st = str(s).strip()
    os = ''
    smd = len(st) % 3
    if smd >= 1:
        for i in range(3-smd):
            st = 'x' + st
    for i in range(len(st) // 3):
        if i == 0:
            os += ',' + st[len(st)-(i+1)*3:len(st)]
        elif i >= 1:
            os = st[len(st)-(i+1)*3:len(st)-(i)*3] + os
            if ((i+1)*3 < len(st)-2):
                os = ',' + os
    return os.replace('x', '')
    
def main():
    for c, (n, d) in enumerate(bd.items()):
        l = make_means(d, c, enh_rates, bg, cbg)
        print('\t', n)
        for i in range(5):
            print(enh_t[i], add_commas(l[i]))        

if __name__ == "__main__":
    main()