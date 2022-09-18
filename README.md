# Fake-News-Detection-Using-NLTK
The project is dividee in to wtoe steps:
1. Train machine learning model
2. Deploy the model using Flask APP

**Prerequisite:**
Make sure you have already installed Flask, nltk, python ,sklearn and all necessary libraires

**Hyperparameters with GridSearchCV :**

Hyperparameters are the variables that the user specify usually while building the Machine Learning model. thus, hyperparameters are specified before specifying the parameters or we can say that hyperparameters are used to evaluate optimal parameters of the model.

**GridSearchCV**

We know what hyperparameters are, our goal should be to find the best hyperparameters values to get the perfect prediction results from our model.  But the question arises, how to find these best sets of hyperparameters? One can try the Manual Search method, by using the hit and trial process and can find the best hyperparameters which would take huge time to build a single model.

For this reason, methods like Random Search, GridSearch were introduced. Here, we will discuss how Grid Seach is performed and how it is executed with cross-validation in GridSearchCV.

Grid Search uses a different combination of all the specified hyperparameters and their values and calculates the performance for each combination and selects the best value for the hyperparameters. This makes the processing time-consuming and expensive based on the number of hyperparameters involved.

**K-Fold Cross Validation :**

K-fold Cross-Validation is an iterative process that divides the train data into k partitions. Each iteration keeps one partition for testing and the remaining k-1 partitions for training the model. The next iteration will set the next partition as test data and the remaining k-1 as train data and so on. In each iteration, it will record the performance of the model and at the end give the average of all the performance.

**How to apply GridSearchCV :**

                                                clf = GridSearchCv(estimator, param_grid, cv, scoring)

Primarily, it takes 4 arguments i.e. estimator, param_grid, cv, and scoring. The description of the arguments is as follows:

1. estimator – A scikit-learn model

2. param_grid – A dictionary with parameter names as keys and lists of parameter values.

3. scoring – The performance measure. For example, ‘r2’ for regression models, ‘precision’ for classification models.

4. cv – An integer that is the number of folds for K-fold cross-validation.

GridSearchCV can be used on several hyperparameters to get the best values for the specified hyperparameters.

**Drawback of GridSearchCV :**

GridSearchCV is a model selection step and this should be done after Data Processing tasks.GridSearchCV will go through all the intermediate combinations of hyperparameters which makes grid search computationally very expensive.

