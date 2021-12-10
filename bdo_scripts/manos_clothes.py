import sys, random

# This script is designed to show the average silver it would take to make a pen manos clothes

black_gem = float(sys.argv[1]) * 1000000
manos = float(sys.argv[2]) * 1000000
memory_frag = float(sys.argv[3]) * 1000000

def main():
    total = manos
    duo = float(((black_gem + memory_frag*10)*.75)) / .25
    tri = float(duo + ((black_gem + memory_frag*10)*.80)) / .2
    tet = float(tri + ((black_gem + memory_frag*10)*.85)) / .15
    pen = float(tet + ((black_gem + memory_frag*10)*.94)) / .06
    print("{}\n{}\n{}\n{}\n".format(duo+manos,tri+manos,tet+manos,pen+manos))


if __name__ == "__main__":
    main()