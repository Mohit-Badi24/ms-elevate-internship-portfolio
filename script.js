const data = {
home: {
  title: "Microsoft Elevate – GTU Internship Program",

  studentInfo: {
    name: "Badi Mohit",
    enrollment: "220200143002",
    college: "Government Engineering College Rajkot",
    department: "Artificial Intelligence & Data Science"
  },

  internshipInfo: {
    duration: "January – April 2026",
    totalWeeks: "12 Weeks",
    organizedBy: "MS Elevate in association with GTU"
  },

  focusAreas: [
    "Data Analytics",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Cloud Computing",
    "Business Intelligence (Power BI)"
  ],

  skillsDeveloped: [
    "Data Preprocessing & Cleaning",
    "Exploratory Data Analysis (EDA)",
    "Supervised & Unsupervised Learning",
    "Deep Neural Networks & CNN",
    "Transformer-based Generative AI",
    "Power BI Dashboard Development",
    "Model Deployment using TensorFlow & Keras"
  ],

  overview: [
    "The Microsoft Elevate – GTU Internship Program is a structured 12-week technical training initiative designed to build strong foundational and practical expertise in emerging technologies.",
    "Throughout this internship, I implemented multiple real-world tasks covering data analytics workflows, machine learning model development, deep learning architectures, dashboard design, and generative AI applications.",
    "This website serves as a comprehensive documentation of my weekly progress, technical implementations, and practical learning outcomes."
  ]
},

  weeks: {
    1: {
      title: "Week 1 – Foundations",
      days: [
        {
          date: "21st January 2026 (Wednesday)",
          topic: "Registration & Orientation",
          learned: [
            "Overview of the Microsoft Elevate program structure",
            "Understanding the complete training roadmap",
            "Introduction to trainers and coordinators",
            "Evaluation and learning expectations",
          ],
        },
        {
          date: "21st January 2026 (Wednesday)",
          topic: "Introduction to Artificial Intelligence",
          learned: [
            "Basic concept of Artificial Intelligence",
            "How AI differs from traditional programming",
            "Real-world applications of AI",
          ],
        },
        {
          date: "23rd January 2026 (Friday)",
          topic: "Introduction to Data Analytics",
          learned: [
            "Meaning and scope of Data Analytics",
            "Types of Data Analytics",
            "Importance of data-driven decision making",
          ],
        },
        {
          date: "28th January 2026 (Wednesday)",
          topic: "AMA Session",
          learned: [
            "Clarification of doubts related to AI and DA",
            "Guidance on learning roadmap",
            "Interaction with mentors",
          ],
        },
      ],
      tasks: [], // explicitly empty
    },
    2: {
      title: "Week 2 – Data Handling & Cleaning",
      days: [
        {
          date: "30th January 2026 (Friday)",
          topic: "Data Handling & Data Cleaning",
          learned: [
            "Understanding structured vs unstructured data",
            "Identifying common data quality issues such as missing values and duplicates",
            "Handling null values using appropriate strategies",
            "Removing duplicate records and correcting inconsistencies",
            "Standardizing column names and data formats",
            "Importance of clean data before analysis or modeling",
          ],
        },
        {
          date: "2nd February 2026 (Monday)",
          topic: "Data Visualization & Exploratory Data Analysis (EDA)",
          learned: [
            "Purpose of Exploratory Data Analysis (EDA)",
            "Understanding distribution, variance, and central tendency",
            "Detecting outliers and anomalies in datasets",
            "Identifying relationships between variables",
            "Using visual techniques to interpret trends and patterns",
            "Drawing insights before applying models",
          ],
        },
        {
          date: "4th February 2026 (Wednesday)",
          topic: "Power BI & Data Modeling",
          learned: [
            "Introduction to Business Intelligence and reporting systems.",
            "Understanding Power BI architecture (Power BI Desktop, Service, and Reports).",
            "Importing structured datasets into Power BI.",
            "Understanding tables, fields, and relationships in a data model.",
            "Concept of primary keys and foreign keys.",
            "Building relationships between multiple tables.",
            "Understanding Star Schema and basic data modeling principles.",
            "Importance of data modeling before creating visualizations.",
          ],
        },
      ],
      tasks: [
        {
          title: "Task 1: Data Handling & Data Cleaning",
          description: [
            "Objective: To prepare raw dataset for analysis by identifying and fixing data quality issues.",
            "Dataset Used: Titanic passenger survival dataset.",
            "Performed loading of dataset using Pandas library.",
            "Examined dataset structure using info() and describe() methods.",
            "Identified missing values in multiple columns.",
            "Handled missing values using appropriate strategies such as fillna() and dropna().",
            "Removed duplicate records to maintain data integrity.",
            "Standardized column names and verified cleaned dataset.",
            "Ensured dataset was ready for further analysis.",
          ],
          implementation: [
            "Imported pandas library.",
            "Loaded CSV dataset using pd.read_csv().",
            "Used df.info() to inspect data types and null values.",
            "Used df.isnull().sum() to identify missing values.",
            "Handled null values using fillna() and dropna().",
            "Removed duplicates using drop_duplicates().",
            "Validated cleaned dataset using basic checks.",
          ],
          screenshots: [],
          github:
            "https://colab.research.google.com/drive/15FVviNw63dufPTooNIC_zW1s2jw8XdIQ?usp=sharing",
        },
        {
          title: "Task 2: Data Visualization & Exploratory Data Analysis (EDA)",
          description: [
            "Objective: To analyze the cleaned dataset and identify patterns, trends, and relationships.",
            "Dataset Used: Cleaned Titanic dataset from Task 1.",
            "Generated summary statistics using describe().",
            "Analyzed distribution of numerical features.",
            "Examined categorical feature distributions.",
            "Created visualizations such as bar charts and histograms.",
            "Identified survival trends based on gender and passenger class.",
            "Derived meaningful insights from structured analysis.",
          ],
          implementation: [
            "Used df.describe() for statistical summary.",
            "Analyzed value counts for categorical columns.",
            "Generated histograms for numerical features.",
            "Created bar plots for survival analysis.",
            "Examined correlations between variables.",
            "Interpreted visual results to derive insights.",
          ],
          screenshots: [],
          github:
            "https://colab.research.google.com/drive/15FVviNw63dufPTooNIC_zW1s2jw8XdIQ?usp=sharing",
        },
        {
          title: "Task 3: Power BI Data Modeling Implementation",
          description: [
            "Objective: To design a structured data model in Power BI.",
            "Dataset Used: Superstore Sales Dataset.",
            "Imported dataset into Power BI Desktop.",
            "Identified key tables and relevant attributes.",
            "Established relationships between tables.",
            "Designed a clean and structured data model.",
          ],
          implementation: [
            "Loaded dataset into Power BI.",
            "Split dataset logically into dimension and fact tables.",
            "Created relationships using appropriate keys.",
            "Validated one-to-many relationships.",
            "Ensured no circular dependencies in the model.",
            "Prepared the model for future DAX and visualization tasks (Week 3).",
          ],
          screenshots: ["images/powerbi_model_week2.png"],
          github: "",
        },
      ],
    },
        3: {
      title: "Week 3 – DAX, Visualizations & Interactivity",
      days: [
        {
          date: "Week 3 – DAX (Data Analysis Expressions)",
          topic: "DAX Fundamentals",
          learned: [
        "Understanding the purpose of Data Analysis Expressions (DAX) in Power BI.",
        "Difference between calculated columns and measures.",
        "Understanding row context and filter context in DAX.",
        "Using basic aggregation functions such as SUM, COUNT, AVERAGE, MIN, and MAX.",
        "Creating dynamic measures that respond to slicers and filters.",
        "Using logical functions such as IF and SWITCH.",
        "Applying CALCULATE function to modify filter context.",
        "Understanding DISTINCTCOUNT and its importance in business metrics.",
        "Using DIVIDE function to avoid division errors.",
        "Implementing basic time intelligence concepts.",
        "Understanding how DAX improves analytical depth in reports."
      ]
        },
        {
          date: "Week 3 – Data Visualizations",
          topic: "Creating Meaningful Visual Reports",
          learned: [
        "Understanding the importance of data visualization in decision-making.",
        "Choosing the correct visual type based on data characteristics.",
        "Creating bar charts and column charts for categorical comparisons.",
        "Designing line charts for trend analysis over time.",
        "Using pie and donut charts for proportional representation.",
        "Creating KPI cards for displaying key business metrics.",
        "Formatting visuals for clarity and readability.",
        "Applying consistent color themes and layout alignment.",
        "Using tooltips to enhance visual context.",
        "Understanding best practices for dashboard design.",
        "Ensuring reports communicate insights clearly rather than just displaying data."
      ]
        },
        {
          date: "Week 3 – Interactivity",
          topic: "Interactive Reporting and User Experience",
          learned:  [
        "Implementing slicers to allow dynamic filtering.",
        "Using page-level, report-level, and visual-level filters.",
        "Understanding cross-filtering and cross-highlighting behavior.",
        "Creating drill-through reports for detailed analysis.",
        "Using bookmarks to enhance navigation experience.",
        "Designing interactive dashboards for better user engagement.",
        "Controlling interactions between visuals.",
        "Creating dynamic titles that change based on filters.",
        "Enhancing user experience through responsive design.",
        "Understanding how interactivity improves data exploration and insight discovery."
      ]
        }
      ],
      tasks: [
  {
    title: "Task 1: DAX Measure Implementation",
    description: [
      "Objective: To implement dynamic business calculations using DAX.",
      "Created fundamental measures such as Total Sales, Total Profit, and Total Quantity.",
      "Calculated Profit Margin using DIVIDE function.",
      "Used DISTINCTCOUNT to calculate unique customers.",
      "Applied CALCULATE function to modify filter context.",
      "Ensured measures dynamically respond to slicers and filters."
    ],
    implementation: [
      "Created measures in Power BI using SUM and COUNT functions.",
      "Implemented Profit Margin formula using DIVIDE.",
      "Used CALCULATE to apply conditional filters.",
      "Tested measures under different filter conditions.",
      "Validated accuracy of computed business metrics."
    ],
    screenshots: ["images/week3_dax_kpi.png",
  "images/week3_dax_formula.png"],
    github: ""
  },
  {
    title: "Task 2: Visualization Dashboard Design",
    description: [
      "Objective: To design an analytical dashboard using appropriate visual elements.",
      "Created bar charts for category-level comparisons.",
      "Designed line charts to analyze time-based trends.",
      "Built KPI cards for key performance indicators.",
      "Applied consistent formatting and theme styling.",
      "Structured dashboard layout for readability and clarity."
    ],
    implementation: [
      "Added bar and column charts for categorical analysis.",
      "Designed line chart for monthly sales trend.",
      "Created KPI cards for Total Sales and Profit.",
      "Formatted visuals with proper alignment and labeling.",
      "Organized report layout into logical sections."
    ],
    screenshots: [ "images/week3_dashboard_full.png"],
    github: ""
  },
  {
    title: "Task 3: Interactive Reporting Features",
    description: [
      "Objective: To enhance dashboard interactivity and user experience.",
      "Implemented slicers for dynamic filtering.",
      "Applied page-level and visual-level filters.",
      "Configured cross-filtering between visuals.",
      "Enabled drill-through for detailed analysis.",
      "Improved user-driven data exploration."
    ],
    implementation: [
      "Added slicers for Region and Category.",
      "Configured interactions between visuals.",
      "Created drill-through page for detailed insights.",
      "Tested filter responsiveness across visuals.",
      "Ensured dashboard updates dynamically based on user input."
    ],
    screenshots: ["images/week3_covid_full.png"],
    github: ""
  }
]

    },
        4: {
      title: "Week 4 – Advanced DAX, Dashboard & Machine Learning",
      days: [
        {
          date: "13 February 2026 – Advanced DAX",
          topic: "Advanced Data Analysis Expressions",
          learned: [
            "Understanding advanced DAX functions such as CALCULATE, FILTER, ALL, and RELATED.",
            "Working with time intelligence functions including TOTALYTD and SAMEPERIODLASTYEAR.",
            "Creating dynamic measures using SELECTEDVALUE.",
            "Implementing conditional logic using IF and SWITCH.",
            "Understanding context transition and filter propagation.",
            "Creating measures for growth percentage and year-over-year comparison.",
            "Optimizing DAX performance for large datasets."
          ]
        },
        {
          date: "16 February 2026 – Power BI Dashboard",
          topic: "Professional Dashboard Development",
          learned: [
            "Designing executive-level dashboards with structured layout.",
            "Implementing drill-through pages for detailed analysis.",
            "Using bookmarks and buttons for enhanced navigation.",
            "Applying consistent color themes and formatting standards.",
            "Optimizing report readability and visual hierarchy.",
            "Enhancing interactivity through advanced slicers and filters."
          ]
        },
        {
          date: "18 February 2026 – Machine Learning",
          topic: "Introduction to Machine Learning Concepts",
          learned: [
        "Understood the relationship between Business Intelligence and Machine Learning.",
        "Explored supervised and unsupervised learning approaches conceptually.",
        "Discussed regression and classification models in analytical workflows.",
        "Understood model evaluation metrics such as accuracy, precision, recall, and F1-score.",
        "Learned how predictive analytics enhances dashboard decision-making.",
        "Connected visualization insights with predictive modeling concepts.",
        "Discussed real-world use cases of ML in healthcare, finance, and retail sectors."
      ]
        }
      ],
      tasks: [ {
      title: "Task 1: Advanced DAX Implementation",
      description: [
    "The objective of this task was to implement advanced Data Analysis Expressions (DAX) functions to perform dynamic and context-aware analytical calculations within Power BI.",
    "A structured data model was prepared using a dedicated Date Table to enable accurate time intelligence analysis.",
    "Advanced DAX measures were developed to analyze cumulative trends, perform year-over-year comparisons, and dynamically rank products based on performance.",
    "The task focused on applying professional analytical techniques beyond basic aggregation functions."
  ],
      implementation: [
    "Created a separate Date Table and established a one-to-many relationship with the Orders table to enable time-based calculations.",
    "Implemented a Running Total measure using CALCULATE and FILTER to analyze cumulative sales growth over time.",
    "Developed Year-to-Date (YTD) Sales using TOTALYTD to evaluate annual performance progression.",
    "Calculated Previous Year Sales using SAMEPERIODLASTYEAR for comparative analysis.",
    "Built Year-over-Year (YoY) Growth Percentage using DIVIDE to measure growth trends.",
    "Implemented Product Ranking using RANKX to dynamically rank products based on total sales.",
    "Applied ALL function to manage filter context while computing ranking logic.",
    "Created a Dynamic Title using SELECTEDVALUE to reflect selected region and enhance dashboard interactivity.",
    "Validated advanced measures under different slicer conditions to ensure proper context transition and filter behavior."
  ],
      screenshots: ["images/week4_advanced_dax.png"],
      github: ""
    },
    {
      title: "Task 2: Complete Executive Netflix Analytics Dashboard",
      description: [
    "In this task, a complete three-page interactive Netflix analytics dashboard was designed and developed using Power BI. The objective was to transform a structured Netflix dataset into a professional, executive-level reporting solution.",
    "The dashboard focuses on performance metrics, content distribution, user engagement analysis, and detailed title-level inspection through drill-through functionality.",
    "A consistent Netflix-inspired red and dark theme was applied across all pages to maintain branding alignment and visual identity."
  ],
      implementation: [

    "PAGE 1 – Branding & Introduction: The first page serves as a cinematic landing page for the dashboard. It includes Netflix-style branding, a bold title layout, and categorized content labels such as Movies, TV Shows, Series, Documentaries, and Anime. A navigation button allows users to enter the analytical dashboard, providing a structured and professional user experience.",

    "PAGE 2 – Executive Overview Dashboard: The second page presents high-level performance indicators through KPI cards including Total Titles, Total Movies, Total TV Shows, Total Views (M), Average User Rating, and Average Duration. Analytical visuals include content growth over time, content distribution by type (Donut Chart), top performing genres by total views, and country-wise content distribution. Interactive slicers for Genre, Type, Country, and Release Year enable dynamic filtering, allowing users to explore content insights based on multiple dimensions.",

    "PAGE 3 – Drill-Through Detail Page: The third page provides a detailed tabular view of individual content records. Using drill-through functionality, users can inspect complete information including Title, Type, Genre, Release Year, Country, Director, Duration, Views, and User Rating. This page enhances analytical depth by allowing granular-level exploration while maintaining visual consistency with the overall theme."
  ],
      screenshots: [
    "images/week4_netflix_page1.png",
    "images/week4_netflix_page2.png",
    "images/week4_netflix_page3.png"
  ],
      github: "https://app.powerbi.com/links/Q8QphtOe_i?ctid=a6d41119-cfd2-440f-9ef3-442f6aa1c738&pbi_source=linkShare&bookmarkGuid=206daab6-6a4b-4608-be35-cff69ce3619b"
    }]
    },
    5: {
  title: "Week 5 – Machine Learning Fundamentals",
  days: [
    {
      date: "20 February 2026 – Supervised Learning",
      topic: "Supervised Machine Learning Techniques",
      learned: [
        "In this session, I learned the fundamental concept of supervised learning where models are trained using labeled data.",
        "I understood how input features and target variables are structured within a dataset.",
        "The difference between regression and classification problems was clearly explained with practical examples.",
        "I studied commonly used supervised algorithms such as Linear Regression, Logistic Regression, Decision Trees, and K-Nearest Neighbors.",
        "I learned how to split data into training and testing sets to evaluate model performance.",
        "Performance metrics such as Accuracy, Precision, Recall, F1-score, and Mean Squared Error were introduced and practiced.",
        "I understood the importance of feature scaling and preprocessing in improving model performance.",
        "The session also emphasized overfitting and underfitting, and how to balance model complexity."
      ]
    },
    {
      date: "23 February 2026 – Unsupervised Learning",
      topic: "Clustering and Pattern Discovery",
      learned: [
        "In this session, I explored unsupervised learning where models identify patterns without labeled outputs.",
        "I learned about clustering techniques and their role in grouping similar data points.",
        "The K-Means clustering algorithm was explained in detail including how centroids are initialized and optimized.",
        "I understood how to determine the optimal number of clusters using the Elbow Method.",
        "Hierarchical clustering concepts were introduced for tree-based grouping.",
        "The importance of feature scaling before clustering was discussed.",
        "I learned how unsupervised learning is applied in customer segmentation, recommendation systems, and anomaly detection."
      ]
    },
    {
      date: "25 February 2026 – Reinforcement Learning",
      topic: "Reward-Based Learning Systems",
      learned: [
        "In this session, I learned about reinforcement learning where an agent learns by interacting with an environment.",
        "I understood the concepts of agent, environment, state, action, and reward.",
        "The idea of maximizing cumulative reward through policy optimization was introduced.",
        "I explored how reinforcement learning differs from supervised and unsupervised learning.",
        "Basic Q-learning concepts and value-based learning approaches were discussed.",
        "Real-world applications such as robotics, gaming AI, and recommendation systems were explained.",
        "The importance of exploration vs exploitation strategy was highlighted during the session."
      ]
    }
  ],
  tasks: [
    {
      title: "Task 1: Supervised Learning Model Implementation",
      description: [
    "In this task, I implemented multiple supervised learning algorithms on real-world datasets to understand model behavior and performance comparison.",
    "The objective was to apply both classification and regression techniques using structured datasets and evaluate their performance using appropriate metrics.",
    "A challenging medical dataset (Breast Cancer dataset) was used for classification, and the California Housing dataset was used for regression analysis.",
    "Cross-validation techniques were applied to ensure model reliability and avoid biased evaluation."
  ],
      implementation: [
    "Loaded the Breast Cancer dataset and prepared input features and target labels.",
    "Split the dataset into training and testing sets using stratified sampling to maintain class balance.",
    "Applied feature scaling using StandardScaler to improve model performance.",
    "Trained multiple classification models including Logistic Regression, K-Nearest Neighbors, Decision Tree, Random Forest, Support Vector Machine, and Naive Bayes.",
    "Evaluated models using 5-Fold Cross Validation to compute average accuracy across multiple folds.",
    "Compared model performance on the test dataset using accuracy score.",
    "Observed that ensemble-based models such as Random Forest provided stable and high performance.",
    "Loaded the California Housing dataset for regression analysis.",
    "Trained multiple regression models including Linear Regression, Ridge Regression, Decision Tree Regressor, Random Forest Regressor, and Support Vector Regressor.",
    "Evaluated regression models using Mean Squared Error (MSE) to compare prediction accuracy.",
    "Analyzed differences in performance between linear models and tree-based models."
  ],
      screenshots: [],
      github: "https://colab.research.google.com/drive/1p8zsvSAOhzL1ikbqtgmUErkQ3ETM4iKL?usp=sharing"
    },
    {
      title: "Task 2: Unsupervised Learning Implementation",
      description: [
    "In this task, I implemented multiple unsupervised learning algorithms to understand how clustering techniques identify hidden patterns in unlabeled data.",
    "A real-world dataset (Penguins dataset) was used to group similar data points based on numerical features.",
    "The objective was to explore different clustering algorithms and evaluate how well they form meaningful clusters.",
    "Unlike supervised learning, no target labels were used during model training."
  ],
      implementation: [
    "Loaded the Penguins dataset and selected relevant numerical features for clustering analysis.",
    "Handled missing values and prepared the dataset for processing.",
    "Applied StandardScaler to normalize features and ensure fair distance-based clustering.",
    "Implemented the K-Means clustering algorithm and used the Elbow Method to determine the optimal number of clusters.",
    "Evaluated cluster quality using the Silhouette Score to measure cluster separation and compactness.",
    "Performed Hierarchical Clustering and generated a dendrogram to visualize hierarchical relationships between data points.",
    "Implemented DBSCAN clustering to analyze density-based grouping and identify noise points.",
    "Compared clustering techniques based on structure, cluster formation, and evaluation metrics."
  ],
      screenshots: [],
      github: "https://colab.research.google.com/drive/1OYpJo0QoOlQ2XyyXGt0ekpD3HBQkpNtN?usp=sharing"
    },
    {
      title: "Task 3: Reinforcement Learning Simulation",
      description: [
    "In this task, I implemented a reinforcement learning model using the Q-Learning algorithm to understand how an agent learns through interaction with an environment.",
    "Unlike supervised learning where labeled data is provided, reinforcement learning allows an agent to learn optimal actions by receiving rewards or penalties based on its behavior.",
    "A simple one-dimensional environment with six states was created where the agent’s objective was to reach the goal state while minimizing penalties."
  ],
      implementation: [
    "Defined a small environment consisting of six states where the final state acted as the goal.",
    "Designed a reward system where the agent receives +10 for reaching the goal and -1 for every other movement.",
    "Initialized a Q-table to store expected future rewards for each state-action pair.",
    "Implemented the Q-learning update formula using learning rate and discount factor.",
    "Applied an epsilon-greedy strategy to balance exploration and exploitation during training.",
    "Gradually reduced the exploration rate using epsilon decay to allow the agent to shift from random actions to learned optimal actions.",
    "Tracked total rewards per episode and plotted a learning curve to observe improvement over time.",
    "Analyzed the final Q-table to determine the learned policy and confirm that the agent consistently chooses the optimal path toward the goal state."
  ],
      screenshots: [],
      github: "https://colab.research.google.com/drive/1X8RHp1p7A5hfc7PFtgtugNjRWOHBuTY5?usp=sharing"
    }
  ]
},
6: {
  title: "Week 6 – Deep Learning & Artificial Neural Networks",
  days: [
    {
      date: "27 February 2026 – Deep Learning",
      topic: "Introduction to Deep Learning",
      learned: [
        "In this session, I was introduced to the concept of Deep Learning and how it differs from traditional machine learning techniques.",
        "I understood that deep learning is based on neural networks with multiple hidden layers that allow models to learn complex patterns from data.",
        "The importance of activation functions such as ReLU, Sigmoid, and Softmax was explained.",
        "I learned how deep learning models are particularly powerful in handling image processing, speech recognition, and natural language tasks.",
        "The role of forward propagation and backpropagation in training neural networks was discussed in detail.",
        "I understood the concept of loss functions and how gradient descent is used to minimize errors during training.",
        "The session also covered overfitting and how techniques like dropout and regularization help improve model generalization."
      ]
    },
    {
      date: "2 March 2026 – Artificial Neural Networks (ANN)",
      topic: "Artificial Neural Network Implementation",
      learned: [
        "In this session, I studied the architecture of Artificial Neural Networks including input layer, hidden layers, and output layer.",
        "I understood how neurons process inputs using weighted connections and bias terms.",
        "The mathematical working of activation functions and their importance in introducing non-linearity was explained.",
        "I learned how to build an ANN model using libraries such as TensorFlow and Keras.",
        "The process of compiling a model with optimizer, loss function, and evaluation metrics was demonstrated.",
        "I also practiced training a neural network on a classification dataset and observed how accuracy improves over epochs.",
        "The session strengthened my understanding of how deep learning models learn hierarchical representations from data."
      ]
    }
  ],
  tasks: [{
  title: "Task 1: Deep Learning Implementation using Fashion MNIST",

  description: [
    "In this task, I implemented a medium-level Deep Neural Network using the Fashion MNIST dataset to understand how deep learning models classify image data.",
    "The objective was to build a multi-layer Artificial Neural Network capable of learning complex patterns from pixel-level image data.",
    "The dataset consists of grayscale images of clothing items categorized into 10 different classes."
  ],

  implementation: [
    "Loaded the Fashion MNIST dataset containing 60,000 training images and 10,000 testing images.",
    "Normalized pixel values from 0–255 to a 0–1 range to improve training stability.",
    "Flattened 28x28 image matrices into 784-dimensional input vectors to make them compatible with a fully connected neural network.",
    "Built a deep neural network with multiple hidden layers (256, 128, and 64 neurons).",
    "Applied ReLU activation in hidden layers to introduce non-linearity.",
    "Integrated Batch Normalization to stabilize and accelerate the learning process.",
    "Used Dropout layers to reduce overfitting and improve generalization.",
    "Used Softmax activation in the output layer for multi-class classification.",
    "Compiled the model using Adam optimizer and sparse categorical crossentropy loss function.",
    "Implemented Early Stopping to prevent overfitting by monitoring validation loss.",
    "Trained the model over multiple epochs and analyzed training and validation accuracy curves.",
    "Evaluated final model performance using test accuracy."
  ],

  screenshots: [],

  github: "https://colab.research.google.com/drive/1PM1cg3uEwJPYaowohP8TE5uKZ4JhOucB?usp=sharing"
},
{
  title: "Task 2: ANN Optimization and Performance Analysis",

  description: [
    "In this task, I focused on improving and analyzing the performance of an Artificial Neural Network using different optimization techniques.",
    "The objective was to compare optimizer performance and evaluate classification results using detailed metrics."
  ],

  implementation: [
    "Loaded and preprocessed the Fashion MNIST dataset including normalization and reshaping.",
    "Built a multi-layer ANN architecture with hidden layers, dropout, and batch normalization.",
    "Trained the model using two different optimizers: Adam and SGD.",
    "Compared test accuracy of both optimizers to analyze performance differences.",
    "Generated a confusion matrix to visualize classification performance across 10 classes.",
    "Printed a detailed classification report including precision, recall, and F1-score.",
    "Analyzed model behavior using validation accuracy and loss trends."
  ],

  screenshots: [],

  github: "https://colab.research.google.com/drive/1w5pD6mtqsLWzjRBVIDTB3x5imqd2VoW4?usp=sharing"
}
]
}
, 7: {
  title: "Week 7 – CNN, TensorFlow & Generative AI",
  days: [
    {
      date: "6 March 2026 – CNN",
      topic: "Convolutional Neural Networks",
      learned: [
        "In this session, I learned about Convolutional Neural Networks (CNN) and how they are specifically designed for image processing tasks.",
        "I understood the importance of convolution layers in extracting spatial features from images using filters.",
        "The concept of feature maps and how multiple filters detect different patterns such as edges and textures was explained.",
        "I studied pooling layers such as MaxPooling which reduce spatial dimensions while preserving important features.",
        "The working of flattening and fully connected layers in CNN architecture was discussed.",
        "I learned why CNN performs better than traditional ANN in image classification tasks.",
        "The session also covered how padding and stride affect the output dimensions of feature maps."
      ]
    },
    {
      date: "9 March 2026 – TensorFlow & Keras",
      topic: "Deep Learning Framework Implementation",
      learned: [
        "In this session, I explored TensorFlow and Keras as powerful frameworks for building deep learning models.",
        "I understood the difference between Sequential API and Functional API.",
        "The process of compiling models with optimizers, loss functions, and evaluation metrics was practiced.",
        "I learned how to save and load trained models.",
        "Callbacks such as EarlyStopping and ModelCheckpoint were explained.",
        "The importance of GPU acceleration for faster model training was discussed.",
        "This session strengthened my practical understanding of deep learning model deployment."
      ]
    },
    {
      date: "11 March 2026 – Generative AI",
      topic: "Introduction to Generative AI",
      learned: [
        "In this session, I was introduced to the concept of Generative AI and how models generate new data instead of only predicting outputs.",
        "I learned about Large Language Models (LLMs) and how they are trained on massive datasets.",
        "The working of transformers and attention mechanisms was briefly explained.",
        "Applications of Generative AI in text generation, image generation, and chatbots were discussed.",
        "I understood the importance of prompt engineering in controlling AI outputs.",
        "Ethical concerns such as bias, misinformation, and responsible AI usage were also highlighted."
      ]
    }
  ],
  tasks: [{
  title: "Task 1: Convolutional Neural Network Implementation using CIFAR-10",

  description: [
    "In this task, I implemented a Convolutional Neural Network (CNN) to perform multi-class image classification using the CIFAR-10 dataset.",
    "The objective was to understand how convolutional layers extract spatial features from RGB images and how CNN architectures outperform traditional neural networks in image-based tasks.",
    "The CIFAR-10 dataset contains 60,000 color images across 10 object categories such as airplanes, cars, birds, cats, and ships."
  ],

  implementation: [
    "Loaded and preprocessed the CIFAR-10 dataset consisting of 50,000 training images and 10,000 testing images.",
    "Normalized pixel values to a 0–1 range to improve training stability.",
    "Built a deep CNN architecture with three convolutional blocks including Conv2D, Batch Normalization, MaxPooling, and Dropout layers.",
    "Used increasing filter sizes (32, 64, 128) to progressively capture complex image features.",
    "Flattened the feature maps and connected them to fully connected dense layers for final classification.",
    "Applied Softmax activation in the output layer for 10-class classification.",
    "Trained the model using the Adam optimizer and sparse categorical crossentropy loss function.",
    "Monitored training and validation accuracy using learning curves.",
    "Evaluated model performance on the test dataset and achieved approximately 75% classification accuracy.",
    "Generated a confusion matrix and classification report to analyze per-class performance."
  ],

  screenshots: [],

  github: "https://colab.research.google.com/drive/1jEDv7ffUG5_3krQ_gWV-LX6ZphOIuSO7?usp=sharing"
},
{
  title: "Task 2: TensorFlow & Keras Model Saving and Inference Pipeline",

  description: [
    "In this task, I implemented a complete model deployment workflow using TensorFlow and Keras.",
    "The objective was to understand how trained deep learning models can be saved, loaded, and used for real-time predictions.",
    "This task focused on practical deployment concepts beyond model training."
  ],

  implementation: [
    "Saved the trained CNN model in HDF5 format for future reuse.",
    "Loaded the saved model to simulate a production inference environment.",
    "Defined class labels corresponding to CIFAR-10 categories.",
    "Selected random test images to perform inference.",
    "Predicted image class using the loaded model.",
    "Displayed predicted and actual class labels for comparison.",
    "Demonstrated end-to-end deep learning workflow from training to deployment."
  ],

  screenshots: [],

  github: "https://colab.research.google.com/drive/1jEDv7ffUG5_3krQ_gWV-LX6ZphOIuSO7?usp=sharing"
},
{
  title: "Task 3: Mini AI Assistant using HuggingFace Transformers",

  description: [
    "In this task, I developed a Mini AI Assistant using pretrained transformer models from HuggingFace to simulate real-world Generative AI functionality.",
    "The objective was to integrate multiple Natural Language Processing capabilities such as question answering, text summarization, and creative text generation into a single intelligent workflow.",
    "This task demonstrates how modern AI systems dynamically route user inputs to different models based on task type."
  ],

  implementation: [
    "Installed and configured the HuggingFace Transformers library in Google Colab.",
    "Loaded a lightweight DistilBERT model for extractive question answering.",
    "Loaded a GPT-based language model (distilgpt2) for creative text generation.",
    "Designed logic to detect whether the user input is a question, long paragraph, or short prompt.",
    "Implemented task routing where questions are answered using a QA model with context.",
    "Used prompt-based summarization by instructing the GPT model to generate concise summaries for long inputs.",
    "Enabled creative text generation with configurable parameters such as temperature and max_new_tokens.",
    "Simulated a multi-capability AI assistant that integrates multiple transformer-based NLP tasks.",
    "Tested the assistant with question answering, summarization, and open-ended text generation scenarios."
  ],

  screenshots: [],

  github: "https://colab.research.google.com/drive/1VjLQ8Gt1cLVuwT1GQeOE7bH7ax1nuH2q?usp=sharing"
}]
}

  }
};

/* ---------- HOME ---------- */
function showHome() {
  setActiveButton(0);
  clearTaskViews();

  const area = document.getElementById("content-area");
  const home = data.home;

  area.innerHTML = `
    <div class="hero-section">
      <h1 class="main-title">${home.title}</h1>
      <div class="hero-meta">
        <span class="duration-badge">${home.internshipInfo.totalWeeks}</span>
        <p>${home.internshipInfo.duration}</p>
        <p>${home.internshipInfo.organizedBy}</p>
      </div>
    </div>

    <div class="home-grid">

      <div class="home-card">
        <h3 class="section-heading">Student Details</h3>
        <p><strong>Name:</strong> ${home.studentInfo.name}</p>
        <p><strong>Enrollment No:</strong> ${home.studentInfo.enrollment}</p>
        <p><strong>College:</strong> ${home.studentInfo.college}</p>
        <p><strong>Department:</strong> ${home.studentInfo.department}</p>
      </div>

      <div class="home-card">
        <h3 class="section-heading">Core Focus Areas</h3>
        <ul>
          ${home.focusAreas.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="home-card">
        <h3 class="section-heading">Skills Developed</h3>
        <ul>
          ${home.skillsDeveloped.map(skill => `<li>${skill}</li>`).join("")}
        </ul>
      </div>

    </div>

    <div class="home-card full-width">
      <h3 class="section-heading">Program Overview</h3>
      ${home.overview.map(p => `<p>${p}</p>`).join("")}
    </div>
  `;
}

/* ---------- WEEK VIEW ---------- */
function showWeek(weekId) {
  const area = document.getElementById("content-area");

  setActiveButton(weekId);

  area.classList.add("page-transition", "fade-out");

  setTimeout(() => {

    const week = data.weeks[weekId];

    let contentHTML = `
      <div class="content-wrapper">

        <div class="week-banner">
          <div class="week-banner-content">
            <h2>${week.title}</h2>
            <span class="week-badge">Learning Summary</span>
          </div>
        </div>
    `;

    if (week.days && week.days.length > 0) {
      contentHTML += week.days.map(day => `
        <div class="week-day-card">
          <div class="week-day-header">
            <h4>${day.topic}</h4>
            <span class="week-date">${day.date}</span>
          </div>
          <ul class="styled-list">
            ${day.learned.map(l => `<li>${l}</li>`).join("")}
          </ul>
        </div>
      `).join("");
    }

    contentHTML += `</div>`;

    area.innerHTML = contentHTML;

    // 🔥 NOW render task buttons AFTER content loads
    clearTaskViews();

    if (week.tasks && week.tasks.length > 0) {
      const taskContainer = document.getElementById(`week${weekId}-tasks`);
      taskContainer.innerHTML = week.tasks.map((task, index) =>
        `<button class="task-btn" onclick="showTask(${weekId}, ${index})">
          ${task.title}
        </button>`
      ).join("");
    }

    area.classList.remove("fade-out");
    area.classList.add("fade-in");

    setTimeout(() => {
      area.classList.add("fade-in-active");
    }, 10);

  }, 300);
}

/* ---------- TASK VIEW ---------- */
function showTask(weekId, taskIndex) {
  const area = document.getElementById("content-area");

  // Start fade out
  area.classList.add("page-transition", "fade-out");

  setTimeout(() => {
    const task = data.weeks[weekId].tasks[taskIndex];

    area.innerHTML = `
      <div class="content-wrapper">

        <div class="task-header">
          <h2>${task.title}</h2>
        </div>

        <div class="task-section">
          <h3 class="highlight-heading">Task Description</h3>
          <ul class="styled-list">
            ${task.description.map(d => `<li>${d}</li>`).join("")}
          </ul>
        </div>

        <div class="task-section">
          <h3 class="highlight-heading">Implementation Details</h3>
          <ul class="styled-list">
            ${task.implementation.map(i => `<li>${i}</li>`).join("")}
          </ul>
        </div>

        ${
          task.screenshots && task.screenshots.length > 0
            ? `
              <div class="task-section">
                <h3 class="highlight-heading">Dashboard Screenshots</h3>
                ${task.screenshots.map((img, i) => `
                  <img src="${img}" 
                       class="task-image" 
                       alt="Screenshot ${i+1}">
                `).join("")}
              </div>
            `
            : ""
        }

        ${
          task.github
            ? `
              <div class="task-section">
                <h3 class="highlight-heading">Project Link</h3>
                <a class="project-link" href="${task.github}" target="_blank">
                  ${
                    task.github.includes("colab")
                      ? "View Google Colab Notebook"
                      : task.github.includes("powerbi")
                      ? "View Power BI Dashboard"
                      : "View Project File"
                  }
                </a>
              </div>
            `
            : ""
        }

      </div>
    `;

    // Remove fade-out
    area.classList.remove("fade-out");

    // Start fade-in
    area.classList.add("fade-in");

    setTimeout(() => {
      area.classList.add("fade-in-active");
    }, 10);

  }, 300);
}
/* ---------- HELPERS ---------- */
function clearTaskViews() {
  document.querySelectorAll(".task-list").forEach(el => el.innerHTML = "");
}

function setActiveButton(index) {
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  if (buttons[index]) buttons[index].classList.add("active");
}

/* ---------- DEFAULT LOAD ---------- */
showHome();

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}