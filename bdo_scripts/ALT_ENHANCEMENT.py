import sys, pprint, math

##
# This script is for regular enhancement with standard
# black stones and boss gear
# The following arguments from the system are as follows
# *NOTE* The following values should be inputed divisible by one million (ie: 240 = 240,000,000)
#   argv[1] = pri boss price
#   argv[2] = End Boss Price
#   argv[3] = type of boss item (weapon or armor as "w" or "a")
#   amount of failstacks recieved on fail: PRI = 2 DUO = 3 TRI = 4 TET = 5 PEN = 6

#   TEST BUILD = ARGV[1] = Type of BOSS WEAPON

# *NOTE* +15 rates are boosted +1 due to relupee (.02 -> .022)
rates = {
    '+15': [.02, .002],
    'duo': [.0769, .0077],
    'tri': [.0625, .00623],
    'tet': [.02, .002],
    'pen': [.03, .003]
}

em = {
    'rb': 20000,
    'bs_a': 210000,
    'bs_w': 210000,
    'cbs_a': 2200000,
    'cbs_w': 2400000,
    'm_frag': 1340000,
    'cron': 1000000
    # 'base_boss': float(sys.argv[1])*1000000,
    # 'end_boss': float(sys.argv[2])*1000000
}

# Turning numbers into comma seperated strings for readability
def add_commas(s):
    st = str(s).strip()
    os = ''
    stmod = len(st) % 3
    if stmod >= 1:
        for i in range(3-stmod):
            st = 'x' + st
    for i in range(len(st) // 3):
        if i == 0:
            os += ',' + st[len(st)-(i+1)*3:len(st)]
        elif i >= 1:
            os = st[len(st)-(i+1)*3:len(st)-(i)*3] + os
            if ((i+1)*3 < len(st)-2):
                os = ',' + os
    return os.replace('x', '')

# Used for array sorting in the mean function
def key(e):
    return e[0]

# Turns the output of main into a readable format
def tidy(e):
        os = e
        os = os.replace('s', ' stack')
        if 'r' in os:
            os = os.replace('r', 'Reblath: ')
            return os
        else:
            os = os.replace('b', 'Boss: ')
            return os

# Function to return the total of enhancing
# STRING btype = Base type (rb or bs)
# STRING enh_level = +15-pen in string format
# STRING enhancement stone type
# INT    starting rate 
# INT    starting total
# INT    rt = times to repeat
# em and ir are defaulted Lists instantiated beforehand
def return_rate(btype, enh_l, stone, rate, total, rt=1, ir=rates, em=em):
    # stacks per level
    enh = {
        '+15': 1,
        'pri': 2,
        'duo': 3,
        'tri': 4,
        'tet': 5,
        'pen': 6
    }
    out = total
    rb = em['rb'] if enh_l == '+15' else em['rb']*2
    mf = (em['m_frag']*10)
    typ = rb if btype.lower() == "rb" else mf

    for i in range(rt):
        #   out (new) = (out (previous total) + (any enhancement mats needed times the cost for failure in decimal {IE: em[reblath]*.90})) / chance to fail
        out = (out + typ*(1-ir[enh_l][0] - ir[enh_l][1]*(i*enh[enh_l]+rate)) + em[stone]) / (1-ir[enh_l][0] - ir[enh_l][1]*(i*enh[enh_l]+rate))
    return out
    
# Finding the best stacks for enhancement for reblath +14 -> pen
#   em (enhancement materials) = List of enhancement materials used when repairing/enhancing
#   ir (item_rates) = List of all rates associated with the base item
#   b_type (base_type) = Informs the function on whether the item for stacking is a weapon or armor piece
def mean(em, ir, b_type):
    # check to see what kind of base and then pick the corresponding black stone type.
    if b_type.lower() == 'a':
        bs = 'bs_a'
        cbs = 'cbs_a'
    elif b_type.lower() == 'w':
        bs = 'bs_w'
        cbs = 'cbs_w'

    # Stack array
    t = {}
    # Init total variable
    total = 0

    # Start of Stacks
    # for i in range(stack amount):
    
    # r+15
    
    for i in range(14):
        total = (
            (total + em['rb']*(1-ir['+15'][0] - ir['+15'][1]*(i+1)) + em[bs]) / (1-ir['+15'][0] - ir['+15'][1]*(i+1))
        )
    t['r15s'] = total

    # r+24
    for i in range(3):
        total = ( 
            total + (em['rb']*2)*(1-ir['duo'][0] - ir['duo'][1]*(i*3+15)) + em['cbs_a']) / (1 - ir['duo'][0] - ir['duo'][1]*(i*3+15)
            )
    t['r24s'] = total

    # r+28
    total = (
            (total + (em['rb']*2)*(1-ir['tri'][0] - ir['tri'][1]*24) + em['cbs_a']) / (1 - ir['tri'][0] - ir['tri'][1]*24)
        )
    t['r28s'] = total

    # r+32
    total = (
            total + (em['rb']*2)*(1-ir['tri'][0] - ir['tri'][1]*28) + em['cbs_a']) / (1-ir['tri'][0] - ir['tri'][1]*28
        )
    t['r32s'] = total

    # b+35
    total = (
        total + (em['m_frag']*10)*(1-ir['duo'][0] - ir['duo'][1]*32) + em[cbs]) / (1-ir['duo'][0] - ir['duo'][1]*32
        )
    t['b35s'] = total
    
    # r+40
    total = (
        total + (em['rb']*2)*(1-ir['tet'][0] - ir['tet'][1]*35) + em['cbs_a']) / (1-ir['tet'][0] - ir['tet'][1]*35
    )
    t['r40s'] = total

    # b+44
    total = (
        total + (em['m_frag']*10)*(1-ir['tri'][0] - ir['tri'][1]*40) + em[cbs]) / (1-ir['tri'][0] - ir['tri'][1]*40
        )
    t['b44s'] = total

    # b+48
    total = (
        total + (em['m_frag']*10)*(1-ir['tri'][0] - ir['tri'][1]*44) + em[cbs]) / (1-ir['tri'][0] - ir['tri'][1]*44
        )
    t['b48s'] = total

    # r+58
    total = (
        total + (em['rb']*2)*(1-ir['tet'][0] - ir['tet'][1]*35) + em['cbs_a']) / (1-ir['tet'][0] - ir['tet'][1]*35
    )
    t['r68s'] = total
    



        # Putting the total data into a array for better organization
    out_arr = []
    for base, total in t.items():
        out_arr.append([tidy(base), round(total)])
    return out_arr



def main():
    arr = mean(em, rates, sys.argv[1])
    arr.sort(key=key)
    for i in arr:
        print(i[0], add_commas(i[1]))

if __name__ == "__main__":
    main()