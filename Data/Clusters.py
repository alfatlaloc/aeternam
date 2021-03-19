import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import matplotlib.pyplot as plt # for data visualization
import seaborn as sns # for statistical data visualization

import os
for dirname, _, filenames in os.walk('CSV/Live.csv'):
    for filename in filenames:
        print(os.path.join(dirname, filename))

import warnings

warnings.filterwarnings('ignore')


data = 'CSV/Month.csv'

df = pd.read_csv(data)

print(df.shape)

print(df.head())

print(df.info())

print(df.describe())