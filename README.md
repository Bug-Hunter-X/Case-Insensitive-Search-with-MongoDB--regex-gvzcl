# Case-Insensitive Search with MongoDB $regex
This repository demonstrates a common issue encountered when performing case-insensitive regular expression searches in MongoDB.  The provided JavaScript code shows a naive approach that can lead to unexpected results or errors. A refined solution is also included. 

**Bug:** Incorrect usage of case-insensitive regular expressions in MongoDB queries might fail to match expected documents if the case is not handled accurately. 

**Solution:**  A corrected approach is showcased, demonstrating the best practice for case-insensitive matching using MongoDB's $regex operator.